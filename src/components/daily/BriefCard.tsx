const NEWS = [

    {
        title: "서울 아파트 거래량 증가",
        summary: "거래량이 증가했습니다."
    },

    {
        title: "기준금리 전망 변화",
        summary: "금리 인하 기대가 커지고 있습니다."
    },

];

export default function BriefCard() {

    return (

        <section>

            <h2>Today's Brief</h2>

            {

                NEWS.map((news, index) => (

                    <article key={index}>

                        <h3>{news.title}</h3>

                        <p>{news.summary}</p>

                        <button>
                            Related News →
                        </button>

                    </article>

                ))

            }

        </section>

    );

}