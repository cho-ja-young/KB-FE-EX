const http = require('http');

const server = http.createServer ((req, res) => {
    
}
if (req.url === '/home') {
res.end
('
} else if (req.url === '/about') {
for (let
i = 0; i < 100; i ++)
for (let j = 0; j < 100;
j++j++)
console.log(`${
i } ${
}
}
res.end
('
} else {
res.end
('NOT
}
});
server.listen
(3000, () =>
console.log('http://localhost:3000
서버 실행 중
});