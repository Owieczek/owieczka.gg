import styled from "styled-components";
import { Text } from "./Styles/Text";
import search2 from "../assets/search2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchCont = styled.div`
  border-radius: 20px;
  border: solid 1px #00000019;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

const SearchIcon = styled.img`
  width: 30px;
  height: auto;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const InputSearch = styled.input`
  text-decoration: none;
  border: none;
  outline: none;
  background-color: #f9f6f2;
  width: 300px;
  height: 30px;
`;
const SearchSelect = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #92acfa12;
  border: none;
  border-radius: 20px;
  color: #000000c7;
  font-weight: 600;
  font-size: 14px;
  height: 40px;
`;
const regions = ["EUNE", "EUW"];

export const SearchBar = ({ error }) => {
  const [input, setInput] = useState("");
  const [region, setRegion] = useState(regions[0]);
  const navigate = useNavigate();

  async function handleSubmit() {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      error(true);
      return;
    }
    const regionWithLastE = region.endsWith("E") ? region.slice(0, -1) : region;
    navigate("/" + regionWithLastE.toLowerCase() + "1" + "/" + trimmedInput);
    setInput("");
  }

  return (
    <div style={{ gridArea: "search" }}>
      <SearchCont>
        <SearchForm>
          <SearchIcon src={search2} />
          <Text>
            <InputSearch
              type="text"
              placeholder="Search summoner..."
              value={input}
              onBlur={(e) => setInput(e.target.value.trim())}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(e);
                }
              }}
              required
              pattern="\S(.*\S)?"
            />
          </Text>
          <Text>
            <SearchSelect
              onChange={(e) => setRegion(e.target.value)}
              value={region}
            >
              {regions.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </SearchSelect>
          </Text>
        </SearchForm>
      </SearchCont>
      {error && (
        <Text
          style={{
            color: "red",
            fontSize: "16px",
            marginLeft: "50px",
          }}
        >
          Invalid summoner name or region.
        </Text>
      )}
    </div>
  );
};
