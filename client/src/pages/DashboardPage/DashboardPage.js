import React, {useContext, useEffect} from 'react';
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import './DashboardPage.css';
import {fetchRow} from "../../http/rowsApi";

const DashboardPage = observer(() => {
    const {rowsStore, modalsStore} = useContext(Context);

    useEffect(() => {
        fetchRow().then(data => rowsStore.setRow(data))
    },[])

    return (
        <div className={"dashboardWrapper"}>
            <ContentContainer>
                <div className={"dashboardBtnWrapper"}>
                    <div className={"dashboardBtn"} onClick={() => modalsStore.setModal(true)}>Add</div>
                    {/*<div className={"dashboardBtn"} onClick={() => modalsStore.setModalType('EXCOMING')}>Excoming</div>*/}
                </div>
                <div className={"tableWrapper"}>
                    <table className={"dashboardTable"}>
                        <tbody>
                            <tr className={"dashboardTableTitles"}>
                                <th className={"dashboardTableTitle"}>Date</th>
                                <th className={"dashboardTableTitle"}>Name</th>
                                <th className={"dashboardTableTitle"}>Description</th>
                                <th className={"dashboardTableTitle"}>Number</th>
                            </tr>
                            {rowsStore.row.map(r =>
                                <tr className={r.type === 'INCOMING' && 'dashboardTableRowWrapper' || r.type === 'EXCOMING' && 'dashboardTableRowWrapperRed'} key={r.id}>
                                    <td className={"dashboardTableRow"}>{r.createdAt}</td>
                                    <td className={"dashboardTableRow"}>{r.name}</td>
                                    <td className={"dashboardTableRow"}>{r.description}</td>
                                    <td className={"dashboardTableRow"}>{r.number}</td>
                                </tr>
                            )}
                            {/*<tr className={`${"dashboardTableRowWrapper"} ${"dashboardTableRowWrapperRed"}`}>*/}
                            {/*    <td className={"dashboardTableRow"}>24/03/2022</td>*/}
                            {/*    <td className={"dashboardTableRow"}>Food</td>*/}
                            {/*    <td className={"dashboardTableRow"}>Food etc.</td>*/}
                            {/*    <td className={"dashboardTableRow"}>200</td>*/}
                            {/*</tr>*/}
                        </tbody>
                    </table>
                </div>
            </ContentContainer>
        </div>
    );
});

export default DashboardPage;