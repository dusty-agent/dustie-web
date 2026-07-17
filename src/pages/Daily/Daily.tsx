import Hero from "../../components/daily/Hero";
import SocialButtons from "../../components/daily/SocialButtons";
import BriefCard from "../../components/daily/BriefCard";
import InsightCard from "../../components/daily/InsightCard";
import ExploreCard from "../../components/daily/ExploreCard";

export default function Daily() {
    return (
        <>
            <Hero />

            <SocialButtons />

            <BriefCard />

            <InsightCard />

            <ExploreCard />
        </>
    );
}