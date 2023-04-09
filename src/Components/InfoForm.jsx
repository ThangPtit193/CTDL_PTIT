import "./info.css";
import { useState } from "react";

const InfoForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            emailOfNewUser: email,
            nameOfNewUser: name,
            phoneOfNewUser: phone,
        };
        setUsers([...users, newUser]);
        setEmail("");
        setName("");
        setPhone("");
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredUsers = users.filter((user) => {
        const regex = new RegExp(search, "gi");
        return user.nameOfNewUser.match(regex) || user.emailOfNewUser.match(regex) || user.phoneOfNewUser.match(regex);
    });

    return (
        <section>
            <form className="infoform" onSubmit={handleSubmit}>
            <label>Họ Và Tên</label>
            <input type="text" id="name" name="name" value={name} 
                   onChange={(e) => setName(e.target.value)}
                   placeholder="Nhập vào họ và tên"
            />
            <label>Email</label>
            <input type="email" id="email" name="email" value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="Nhập vào email"
            />
            <label>Số điện thoại</label>
            <input type="number" id="number" name="phone number" value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                   placeholder="Nhập vào số điện thoại"
            />
            <button type="submit">Gửi thông tin</button>
            </form>
            <div>
            <h2  style={{ color:'rgb(119, 119, 252)' }} >Tìm kiếm người dùng</h2>
            <input type="text" id="search" name="search" value={search} 
                   onChange={handleSearch} placeholder="Nhập vào 1 trong 3 dữ liệu" 
            />
            <h2 style={{ color:'rgb(119, 119, 252)' }} >Danh sách người dùng</h2>
            {filteredUsers.length === 0 ? (
                <p>Không tìm thấy kết quả nào.</p>
            ) : 
            (
            <ul>
                {filteredUsers.map((user, index) => (
                    <li key={index}>
                        <p>Họ và tên: {user.nameOfNewUser}</p>
                        <p>Email: {user.emailOfNewUser}</p>
                        <p>Số điện thoại: {user.phoneOfNewUser}</p>
                    </li>
                    )
                )
            }
            </ul>
            )
            }
            </div>
        </section>
    );
};

export default InfoForm;