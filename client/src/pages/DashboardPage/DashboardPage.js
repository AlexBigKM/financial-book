import React, {useContext, useEffect} from 'react';
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import styles from './DashboardPage.css';
import {fetchRow} from "../../http/rowsApi";
import {format} from 'date-fns';

const DashboardPage = observer(() => {
    const {rowsStore, modalsStore} = useContext(Context);

    useEffect(() => {
        fetchRow().then(data => rowsStore.setRow(data))
    },[])
    console.log(modalsStore.modal)

    return (
        <div className={styles.dashboardWrapper}>
            <ContentContainer>
                <div className={styles.dashboardBtnWrapper}>
                    <div className={styles.dashboardBtn} onClick={() => modalsStore.setModal(true)}>Add</div>
                    {/*<div className={styles.dashboardBtn} onClick={() => modalsStore.setModalType('EXCOMING')}>Excoming</div>*/}
                </div>
                <div className={styles.tableWrapper}>
                    <table className={styles.dashboardTable}>
                        <tbody>
                            <tr className={styles.dashboardTableTitles}>
                                <th className={styles.dashboardTableTitle}>Date</th>
                                <th className={styles.dashboardTableTitle}>Name</th>
                                <th className={styles.dashboardTableTitle}>Description</th>
                                <th className={styles.dashboardTableTitle}>Number</th>
                            </tr>
                            {rowsStore.row.map(r =>
                                <tr className={r.type === 'INCOMING' && styles.dashboardTableRowWrapper || r.type === 'EXCOMING' && styles.dashboardTableRowWrapperRed} key={r.id}>
                                    <td className={styles.dashboardTableRow}>{format(new Date(r.createdAt), 'LLLL d, yyyy')}</td>
                                    <td className={styles.dashboardTableRow}>{r.name}</td>
                                    <td className={styles.dashboardTableRow}>{r.description}</td>
                                    <td className={styles.dashboardTableRow}>{r.number}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </ContentContainer>
        </div>
    );
});

export default DashboardPage;