*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    background: linear-gradient(135deg,#0f172a,#1e293b);
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
}

.container{
    width:700px;
    max-width:90%;
    background:rgba(255,255,255,0.05);
    backdrop-filter:blur(10px);
    border:1px solid rgba(255,255,255,0.1);
    border-radius:20px;
    padding:30px;
    box-shadow:0 20px 50px rgba(0,0,0,.4);
}

h1{
    text-align:center;
    margin-bottom:25px;
}

input{
    width:100%;
    padding:15px;
    border:none;
    border-radius:12px;
    font-size:18px;
    margin-bottom:25px;
}

.meter{
    width:100%;
    height:25px;
    background:#334155;
    border-radius:50px;
    overflow:hidden;
}

#fill{
    width:0%;
    height:100%;
    border-radius:50px;
    transition:.4s;
}

#status{
    text-align:center;
    margin-top:15px;
    font-size:24px;
    font-weight:bold;
}

.labels{
    margin-top:25px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    text-align:center;
}