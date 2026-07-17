import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import "./Property.css";

export default function Property(){

    return(

        <div className="property-page">

            <h1>🏢 Today's Property</h1>

            <p className="property-subtitle">

                AI Recommended Investment Opportunities

            </p>

            <Card title="Today's Recommendation">

                <div className="property-list">

                    <PropertyCard
                        title="Office Building"
                        location="Yeongdeungpo-gu"
                        price="₩5.2B"
                        roi="6.4%"
                    />

                    <PropertyCard
                        title="Retail"
                        location="Mapo-gu"
                        price="₩2.8B"
                        roi="5.8%"
                    />

                    <PropertyCard
                        title="Factory"
                        location="Gimpo"
                        price="₩8.4B"
                        roi="7.1%"
                    />

                </div>

            </Card>

            <Card title="Recommended Business">

                <div className="business-grid">

                    <Business title="🍜 Restaurant"/>

                    <Business title="☕ Cafe"/>

                    <Business title="🏋 Fitness"/>

                    <Business title="🏥 Clinic"/>

                </div>

            </Card>

            <Card title="Today's Market Insight">

                <ul className="insight-list">

                    <li>📈 Office demand is increasing</li>

                    <li>🏦 Interest rates remain stable</li>

                    <li>🏢 Vacancy rate is decreasing</li>

                </ul>

            </Card>

        </div>

    );

}

function PropertyCard(props:any){

    return(

        <div className="property-card">

            <h3>{props.title}</h3>

            <p>{props.location}</p>

            <p>{props.price}</p>

            <p className="roi">

                ROI {props.roi}

            </p>

            <Button>

                Analyze

            </Button>

        </div>

    );

}

function Business({title}:{title:string}){

    return(

        <div className="business-card">

            {title}

        </div>

    );

}