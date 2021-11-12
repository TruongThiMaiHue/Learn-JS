const express = require('express'); //đi vào thư mục node modules tải nạp ra ngoài lưu vào biến
const app = express();//gọi function, function này đã được viết sẵn và trả lại một đối tượng, đại diện cho ứng dụng của các bạn.
const morgan = require('morgan');
const port = 2000;

app.use(morgan('combined'));
app.get('/home', (req, res) => res.send('Hello world!')) //arrow function
// định nghĩa cái route
/*c1: declaration function
app.get('/', function(req,res){ 
    return res.send('Hello world!')
})
c2: full arrow function
app.get('/', (req,res) => { 
    return res.send('Hello world!')
})*/
app.listen(port, () => console.log(`Server is running at port ${port}`))
