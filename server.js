const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    
</head>
<style>

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
    background: linear-gradient(to right, #a8c8e0, #ffffff);
    color: #333; 
    transition: background-color 0.3s, color 0.3s;
}

header {
    background-color: #080000;
    color: #fff;
    padding: 10px 20px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-container {
    display: flex;
    align-items: center;
    gap: 20px;
}

.header-container .logo {
    height: 50px;
}

.hamburger {
    font-size: 24px;
    cursor: pointer;
    z-index: 1001;
}

/* Navigation */
nav {
    flex-grow: 1;
}

.nlinks {
    list-style: none;
    display: flex;
    gap: 1em;
    margin: 0;
    padding: 0;
    margin-left: 250%;
    
}

.nlinks li {
    margin: 0;
}

.nlinks a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
}

.nlinks a:hover {
    text-decoration: underline;
}

/* Theme Toggle Button */
.theme-toggle {
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    margin-left: 0px;
}

body.dark-mode {
    background: linear-gradient(to bottom, #0d0d0d, #343a40, #686e74, #343a40, #0d0d0d);
    color: #e0e0e0;
}

header.dark-mode {
    background-color: #050505;
}



/* Hamburger menu styles */
.hamburger-links {
    display: none;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #333;
    position: absolute;
    top: 60px;
    left: 0;
    width: 200px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    z-index: 1001;
}

.hamburger-links.active {
    display: block;
}

.hamburger-links li {
    padding: 10px;
}

.hamburger-links a {
    color: #fff;
    text-decoration: none;
    display: block;
}

.hamburger-links a:hover {
    background-color: #444;
}

/* Main Section */
main {
    padding: 20px;
    margin-top: 60px; /* Space for fixed header */
    flex: 1; /* Allows main to grow and fill available space */
}

/* Fixed Footer */
footer {
    background-color: #040000;
    color: #fff;
    text-align: center;
    padding: 10px 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
}

/* Media Queries */
@media (max-width: 768px) {
    .nlinks {
        display: none;
    }

    .hamburger {
        display: block;
    }
}

@media (max-width: 480px) {
    .header-container {
        flex-direction: column;
        align-items: flex-start;
    }

    .logo {
        margin-top: 10px;
    }

    .hamburger-links {
        width: 100%;
    }
}
#zro {
    text-align: center;
    padding: 50px 20px;
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow effect */
}

#zro h1 {
    font-size: 2.5rem;
    margin: 0;
    color: #035d52; /* Darker color for contrast */
}

#zro p {
    font-size: 1.2rem;
    margin-top: 10px;
    color: #0b0101; /* Gray color for text */
}
#zro  .yo{
    align-content: flex-start;
}
#zro .cta-button {
    display: inline-block;
    margin-top: 20px;/* Basic Styles */
}
</style>
<body>
    <header>
        <div class="header-container">
            <span class="hamburger">&#9776;</span>
            <img class="logo" src="logo.png" alt="logo">
            <nav>
                <ul class="nlinks">
                    <li><a href="s.html">Home</a></li>
                    <li><a href="1.html">About</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="2.html">Sign Up</a></li>
                    <li><button class="theme-toggle" aria-label="Toggle theme">&#9790;</button></li>
                </ul>
            </nav>
        </div>
        <ul class="hamburger-links">
            <li><a href="take-exam.html">Take Exam</a></li>
            <li><a href="view-results.html">View Results</a></li>
            <li><a href="d.html">View Details</a></li>
        </ul>
    </header>
    <main id="zro">
        <h1>Welcome to Exam Hub</h1>
        <p>Your one-stop solution for exam management and performance tracking.</p>
        <p class=yo>Wanna test you knowledge click below to check your knowledge</p>
        <a class="cta-button" href="take-exam.html">Start Exam</a>
    </main>
    <footer>
        <p>Contact us: examhub@gmail.com</p>
    </footer>
    <script src="s.js"></script>
</body>
</html>
`)
    res.end()
})
server.listen(4057,()=>{
    console.log("Server is running @http://local:4057")
})