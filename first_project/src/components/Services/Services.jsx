import './Services.css'

function Services() {
    
    function update() {
        const Title = document.getElementById('title');
        Title.innerHTML = 'I love bangladesh'
    }

    return (
        <div>
        <h1 id='title'>I am Form  Services Components</h1>
        <button onClick={update} className='click-btn'>Click Me</button>
        </div>
    )
}
export default Services