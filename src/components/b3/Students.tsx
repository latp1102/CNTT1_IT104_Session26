import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Students() {
    const [searchParams, setSearchParmas] = useSearchParams();
    const [inputValue, setInputValue] = useState("");
    const handleSearch = () => {
        setSearchParmas({
            studentName: inputValue,
        })
    }
  return (
    <div>
        <input value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Nhập từ khóa tìm kiếm"/>
        <button onClick={handleSearch}>Tìm kiếm</button>
    </div>
  )
}

