import { useState } from "react";

import Button from "../ui/Button";

import "./LocationSearch.css";

interface LocationSearchProps {

    onAnalyze?: (address: string) => void;

}

export default function LocationSearch({

    onAnalyze,

}: LocationSearchProps) {

    const [address, setAddress] = useState("");

    const handleAnalyze = () => {

        if (!address.trim()) return;

        onAnalyze?.(address);

    };

    return (

        <div className="location-search">

            <label>

                주소 입력

            </label>

            <input

                value={address}

                onChange={(e) => setAddress(e.target.value)}

                placeholder="예) 서울 영등포구 문래로 77"

            />

            <p className="location-help">

                도로명주소 또는 지번주소를 입력하세요.

            </p>

            <div className="location-action">

                <Button onClick={handleAnalyze}>

                    🔍 입지 분석하기

                </Button>

            </div>

        </div>

    );

}