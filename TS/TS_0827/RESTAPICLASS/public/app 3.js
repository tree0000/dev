document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('http://localhost:8001/api/v1/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, address, email }),
        });

        if (!response.ok) {
            throw new Error('회원 등록에 실패했습니다.');
        }

        const data = await response.json();
        console.log('등록된 회원:', data);
    } catch (error) {
        console.error('회원 등록 중 오류 발생:', error);
    }
});
