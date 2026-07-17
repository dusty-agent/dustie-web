import Card from "../../components/ui/Card";

import "./Workspace.css";

export default function Workspace() {

    return (

        <div className="workspace-page">

            <h1>📂 Workspace</h1>

            <p className="workspace-subtitle">

                저장한 상담, 물건, 투자 분석을 한 곳에서 관리하세요.

            </p>

            <Card>

                <div className="workspace-status">

                    <div className="status-dot"></div>

                    <div>

                        <h3>Workspace 준비 완료</h3>

                        <p>

                            저장된 상담과 투자 자료를 이곳에서 관리합니다.

                        </p>

                    </div>

                </div>

            </Card>

            <section className="workspace-grid">

                <Card title="⭐ 저장된 상담">

                    <p>

                        Ask Dustie에서 저장한 상담 내역입니다.

                    </p>

                </Card>

                <Card title="🏢 저장된 물건">

                    <p>

                        관심 물건과 추천 물건을 관리합니다.

                    </p>

                </Card>

                <Card title="📈 저장된 투자 분석">

                    <p>

                        ROI, 입지, 업종 분석 결과를 보관합니다.

                    </p>

                </Card>

                <Card title="📝 상담 메모">

                    <p>

                        상담 중 작성한 메모를 확인합니다.

                    </p>

                </Card>

            </section>

            <Card title="🕘 최근 작업">

                <ul className="workspace-list">

                    <li>아직 저장된 작업이 없습니다.</li>

                    <li>Ask Dustie에서 상담을 저장해보세요.</li>

                </ul>

            </Card>

        </div>

    );

}