import React, { useState, useEffect } from 'react';
import { Avatar, Badge, Box, Button, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material';
import {
    Send as SendIcon,
    Circle as OnlineIcon
} from '@mui/icons-material';

export default function ChatSupport() {
    // Sample data for customers and messages
    const [customers, setCustomers] = useState([]);

    const ChatArr = [
        { id: 1, name: 'John Doe', avatar: 'JD', online: true, unread: 2 },
        { id: 2, name: 'Jane Smith', avatar: 'JS', online: false, unread: 0 },
        { id: 3, name: 'Awais Ishaq', avatar: 'AI', online: true, unread: 0 },
    ]
    useEffect(() => {
        setCustomers(ChatArr)
    }, [])

    const [messages, setMessages] = useState({
        1: [
            { id: 1, text: 'Hello, I need help with my order', sender: 'customer', time: '10:30 AM' },
            { id: 2, text: 'Sure, what seems to be the problem?', sender: 'admin', time: '10:32 AM' },
        ],
        2: [
            { id: 1, text: 'When will my order ship?', sender: 'customer', time: 'Yesterday' },
        ],
        3: [],
    });

    const [activeCustomer, setActiveCustomer] = useState(null);
    const [newMessage, setNewMessage] = useState('');

    // Set first customer as active by default
    useEffect(() => {
        if (customers.length > 0 && !activeCustomer) {
            setActiveCustomer(customers[0].id);
        }
    }, [customers, activeCustomer]);

    const handleSendMessage = () => {
        if (!newMessage.trim() || !activeCustomer) return;

        const newMsg = {
            id: messages[activeCustomer] ? messages[activeCustomer].length + 1 : 1,
            text: newMessage,
            sender: 'admin',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => ({
            ...prev,
            [activeCustomer]: [...(prev[activeCustomer] || []), newMsg]
        }));

        setNewMessage('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="h-[92vh] bg-[#002022] overflow-hidden p-3">
            <Typography variant="h5" color="white" gutterBottom>
                Customer Chat Support
            </Typography>

            <div className="flex h-[calc(92vh-60px)]">
                {/* Customer List */}
                <div className="w-1/4 bg-[#003034] rounded-l-lg overflow-y-auto">
                    <List dense>
                        {customers.map(customer => (
                            <ListItem
                                key={customer.id}
                                button
                                selected={activeCustomer === customer.id}
                                onClick={() => setActiveCustomer(customer.id)}
                                className="hover:bg-[#004044]"
                            >
                                <ListItemAvatar>
                                    <Badge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        badgeContent={
                                            customer.online ? (
                                                <OnlineIcon color="success" sx={{ fontSize: 12 }} />
                                            ) : null
                                        }
                                    >
                                        <Avatar sx={{ bgcolor: '#017374' }}>
                                            {customer.avatar}
                                        </Avatar>
                                    </Badge>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography color="white">
                                            {customer.name}
                                            {customer.unread > 0 && (
                                                <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                                                    {customer.unread}
                                                </span>
                                            )}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography color="gray">
                                            {customer.online ? 'Online' : 'Offline'}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col bg-[#013538] rounded-r-lg">
                    {activeCustomer ? (
                        <>
                            {/* Chat Header */}
                            <div className="p-3 bg-[#004044] flex items-center border-b border-[#005055]">
                                <Avatar sx={{ bgcolor: '#017374', mr: 2 }}>
                                    {customers.find(c => c.id === activeCustomer)?.avatar}
                                </Avatar>
                                <Typography variant="h6" color="white">
                                    {customers.find(c => c.id === activeCustomer)?.name}
                                </Typography>
                                <Box sx={{ flexGrow: 1 }} />
                                <Typography color={customers.find(c => c.id === activeCustomer)?.online ? 'success.main' : 'text.secondary'}>
                                    {customers.find(c => c.id === activeCustomer)?.online ? 'Online' : 'Offline'}
                                </Typography>
                            </div>

                            {/* Messages */}
                            <div style={{scrollbarWidth:"none"}} className="flex-1 overflow-y-auto p-4">
                                {messages[activeCustomer]?.length > 0 ? (
                                    messages[activeCustomer].map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`mb-4 flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-xs p-3 rounded-lg ${msg.sender === 'admin' ? 'bg-[#017374] text-white' : 'bg-[#004044] text-white'}`}
                                            >
                                                <Typography>{msg.text}</Typography>
                                                <Typography variant="caption" display="block" color="textSecondary" className="text-right">
                                                    {msg.time}
                                                </Typography>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <Typography color="textSecondary" className="text-center mt-10">
                                        No messages yet. Start the conversation!
                                    </Typography>
                                )}
                            </div>

                            {/* Message Input */}
                            <div className="p-3 border-t border-[#005055]">
                                <div className="flex items-center">
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Type a message..."
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        InputProps={{
                                            style: { color: 'white', backgroundColor: '#003034' },
                                        }}
                                    />
                                    <IconButton
                                        color="primary"
                                        onClick={handleSendMessage}
                                        disabled={!newMessage.trim()}
                                        sx={{ ml: 1 }}
                                    >
                                        <SendIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <Typography color="textSecondary">
                                Select a customer to start chatting
                            </Typography>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}