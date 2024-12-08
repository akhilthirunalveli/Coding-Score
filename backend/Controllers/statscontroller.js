const axios = require('axios');

exports.fetchUserStats = async (req, res) => {
    const { platform, handle } = req.params;

    try {
        let data;
        switch (platform) {
            case 'codeforces':
                const cfResponse = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
                data = cfResponse.data.result[0];
                break;
            case 'leetcode':
                // Placeholder for LeetCode stats fetching
                data = { message: 'LeetCode stats not implemented' };
                break;
            case 'codechef':
                // Placeholder for CodeChef stats fetching
                data = { message: 'CodeChef stats not implemented' };
                break;
            default:
                return res.status(400).json({ error: 'Unsupported platform' });
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching stats' });
    }
};
