import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import classNames from "classnames";
import close from "../../assets/img/close.png";
import InputBlock from "../Input/InputBlock";

import './CreateModal.css';
import {createRow} from "../../http/rowsApi";


const CreateModal = observer(() => {
    const {modalsStore}= useContext(Context);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [number, setNumber] = useState('');
    const [type, setType] = useState('INCOMING');

    const addRows = () => {
        const formData = new FormData();
        formData.append('name', name)
        formData.append('description', description)
        formData.append('number', `${number}`)
        formData.append('type', type)
        createRow(formData).then(data => {
            resetHandler()
        })
    }

    const resetHandler = () => {
        modalsStore.setModal(false);
        setName('');
        setDescription('');
        setNumber('');
        setType('INCOMING')
    }

    const selectHandler = (e) => {
        const selectedType = e.target.value;
        setType(selectedType);
    }

    return (
        <div className={classNames({
            "modal": true,
            "showModal": modalsStore.modal === true,
            "hideModal": modalsStore.modal === false
        })}
        >
            <div className={"modalWrapper"}>
                <img className={"modalCloseImg"} src={close} alt={"close"} onClick={resetHandler} />
                <div className={"modalInputWrapper"}>
                    <select className={"modalSelect"}
                        value={type}
                        onChange={selectHandler}
                    >
                        <option value={'INCOMING'}>Incoming</option>
                        <option value={'EXCOMING'}>Excoming</option>
                    </select>
                    <InputBlock
                        label={"Name"}
                        type={"text"}
                        autoComplete={"off"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <InputBlock
                        label={"Description"}
                        type={"text"}
                        autoComplete={"off"}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <InputBlock
                        label={"Number"}
                        type={"number"}
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                    <button className={"modalBtn"} onClick={addRows} >Accept</button>
                </div>
            </div>
        </div>
    );
});

export default CreateModal;