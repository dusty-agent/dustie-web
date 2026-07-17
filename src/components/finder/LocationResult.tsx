import "./LocationResult.css";
import type { LocationAnalysis } from "../../types/finder";

interface Props{

    data:LocationAnalysis;

}

export default function LocationResult({

        data,

    }:Props){

    return (

        <div className="location-result">

            <h3>

                📊 입지 분석 결과

            </h3>

            <div className="result-grid">

            <ResultItem

            label="🏪 편의점"

            value={`${data.convenienceStore}개`}

            />

            <ResultItem

            label="🚬 담배권"

            value={data.tobacco ? "가능":"불가"}

            />

            <ResultItem

            label="👥 유동인구"

            value={data.footTraffic}

            />

            <ResultItem

            label="🏢 경쟁업종"

            value={data.competition}

            />

            <ResultItem

            label="🚉 역세권"

            value={data.station}

            />

            <ResultItem

            label="🚗 주차"

            value={data.parking}

            />

            </div>

        </div>

    );

}

function ResultItem({

    label,

    value,

}:{

    label:string;

    value:string;

}){

    return(

        <div className="result-item">

            <span>

                {label}

            </span>

            <strong>

                {value}

            </strong>

        </div>

    );

}