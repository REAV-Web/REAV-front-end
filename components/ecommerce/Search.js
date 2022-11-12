import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    console.log("click");
    router.push({
      pathname: "/products",
      query: {
        search: searchTerm,
      },
    });
    setSearchTerm("");
  };

  const handleInput = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  return (
    <>
      <form>
        <select className="select-active">
          <option>ALL</option>
          <option>여성의류</option>
          <option>남성의류</option>
          <option>휴대폰</option>
          <option>컴퓨터</option>
          <option>전자기기</option>
          <option>악세서리</option>
          <option>가정용품</option>
          <option>가방</option>
          <option>신발</option>
          <option>육아용품</option>
        </select>
        <input
          value={searchTerm}
          onKeyDown={handleInput}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="검색어를 입력하세요"
        />
      </form>

      {/* <Button>Search</Button> */}
      {/* <button onClick={handleSearch}>search</button> */}
    </>
  );
};

export default Search;
