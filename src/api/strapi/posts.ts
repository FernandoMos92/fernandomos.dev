const baseUrl = 'https://strapi-mos.up.railway.app/api/posts';
const strapiToken = '033e3fa569bd96748291b2df63fb9fbb37789f23c3e6932f6fcc8d578737f8fb874d4012d05c6a68f2b8bc62a8842d5bd5f29462daeedc23cb536afbb3f37fddf63521abeff619cfc593e0f463b51e77a4199bba7ab9c40526a63ffb254b4f21d0550aa6acde47d9fae44bc4d4945300661b9a99b58e503e60e23143be795cc8';

const ListPosts = async () => {
    try {
        const response = await fetch(baseUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${strapiToken}`,
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar posts: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        return null;
    }
};

export {
    ListPosts,
};
