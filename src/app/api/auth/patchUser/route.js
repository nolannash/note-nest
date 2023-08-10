import connect from '@/utilis/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export const PATCH = async (req, res) =>  {
    if (req.method !== 'PATCH') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, name, password } = req.body;

    try {
        await connect();
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (name) {
            user.name = name;
        }

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 12);
            user.password = hashedPassword;
        }

        await user.save();

        return res.status(200).json({ message: 'User profile updated successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error updating user profile', error: error.message });
    }
}
