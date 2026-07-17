const INSTAGRAM =
    "https://instagram.com/assetpicker";

const FACEBOOK =
    "https://facebook.com/assetpicker";

export default function SocialButtons() {

    return (

        <section>

            <h2>Today's Card News is Ready</h2>

            <p>
                오늘의 카드뉴스는
                Instagram과 Facebook에서
                가장 먼저 만나보실 수 있습니다.
            </p>

            <div>

                <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📸 View on Instagram
                </a>

                <a
                    href={FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📘 View on Facebook
                </a>

            </div>

        </section>

    );

}