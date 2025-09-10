import React, { useState } from 'react'

import { useSearchParams } from 'react-router-dom'
export default function Studentss() {
    const [searchParams, setSearchParmas] = useSearchParams();
    const [inputValue, setInputValue] = useState("");
    const handleSearch = () => {
        setSearchParmas({
            studentName: inputValue,
        })
    }
  return (
    <div>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="Nhập từ khóa tìm kiếm"/>
        <button onClick={handleSearch}>Tìm kiếm</button>
        <p>kết quả: {searchParams}</p>
    </div>
  )
}
