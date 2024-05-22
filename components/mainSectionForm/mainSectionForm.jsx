import React, {useState} from 'react';
import ColChatsGpt from "../colChatsGpt/colChatsGpt";
import './mainSectionForm.css';
import FirstChat from "../firstChat/firstChat";
import ColChatsClaude from "../colChatsClaude/colChatsClaude";
import ColChatsGigachat from "../colChatsGigachat/colChatsGigachat";

const MainSectionForm = (props) => {




    const [inpGetValue, setValue] = useState('')   //   значение после первого запроса
    const [valueChatGpt, setValueChatGpt] = useState('')  //  запрос в чат гпт
    const [sessionChatGpt, setSessionChatGpt] = useState([])  //  все запросы в чат gpt

    const [valueChatClaude, setValueChatClaude] = useState('')  //  запрос в чат Claude
    const [sessionChatClaude, setSessionChatClaude] = useState([])  //  все запросы в чат Claude


    const [valueChatGigachat, setValueChatGigachat] = useState('')  //  запрос в чат Gigachat
    const [sessionChatGigachat, setSessionChatGigachat] = useState([])  //  все запросы в чат Gigachat




    return (
        <>
            {
                props.session.length === 0 &&
                <FirstChat
                    setSession={props.setSession}
                    session={props.session}
                    inpGetValue={inpGetValue}  //   значение после первого запроса
                    setValue={setValue}
                />
            }
            {
                props.session.length > 0 &&
                <div className="chat-container">
                    <ColChatsGpt
                        session={props.session}    // все сессии
                        setSession={props.setSession}    // изменение сессий
                        sessionChatGpt={sessionChatGpt}   //  все сессии чата gpt
                        setSessionChatGpt={setSessionChatGpt}
                        valueChatGpt={valueChatGpt} //  запрос в чат гпт
                        setValueChatGpt={setValueChatGpt}
                        inpGetValue={inpGetValue}  //   значение после первого запроса
                        setValue={setValue}
                    />
                    <ColChatsClaude
                        session={props.session} // все сессии
                        sessionChatClaude={sessionChatClaude} //  все сессии чата Claude
                        setSessionChatClaude={setSessionChatClaude}
                        valueChatClaude={valueChatClaude} //  запрос в чат Claude
                        setValueChatClaude={setValueChatClaude}
                        inpGetValue={inpGetValue}  //   значение после первого запроса
                        setValue={setValue}
                    />
                    <ColChatsGigachat
                        session={props.session} // все сессии
                        sessionChatGigachat={sessionChatGigachat}   //  все сессии чата Gigachat
                        setSessionChatGigachat={setSessionChatGigachat}
                        valueChatGigachat={valueChatGigachat} //  запрос в чат Gigachat
                        setValueChatGigachat={setValueChatGigachat}
                        inpGetValue={inpGetValue}  //   значение после первого запроса
                        setValue={setValue}
                    />
                </div>
            }




        </>

    );
};

export default MainSectionForm;