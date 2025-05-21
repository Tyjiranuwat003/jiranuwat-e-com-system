interface User {
    username: string;
    password: string;
    fullName: string;
    role: 'admin' | 'user';
}

export const mockUsers: User[] = [
    {
        username: 'admin',
        password: 'admin123',
        fullName: 'ผู้ดูแลระบบ',
        role: 'admin'
    },
    {
        username: 'user1',
        password: 'user123',
        fullName: 'จิรานุวัฒน์ ใจดี',
        role: 'user'
    },
    {
        username: 'user2',
        password: 'user456',
        fullName: 'สมชาย รักการค้า',
        role: 'user'
    }
];

export const validateLogin = (username: string, password: string): User | null => {
    const user = mockUsers.find(u => u.username === username && u.password === password);
    return user || null;
};
