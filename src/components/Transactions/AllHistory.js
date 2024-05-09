import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/GlobalContext'

export default function AllHistory() {
    
    const {allTransactionHistory } = useGlobalContext()

    const [...history ] = allTransactionHistory()


    return (
        <>
        <AllHistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) =>{
                console.log(item)
                const {_id, title, amount, type, description} = item;

                return <div className='history-item' key={_id}>
                    <div>
                    <p style={{
                        color: type === "expense" ? "red" : "var(--color-green)"
                    }}>
                        {title}
                    </p>
                    <p>{type}</p>
                    </div>
                    <p style={{
                        color: type === "expense" ? "red" : "var(--color-green)"
                    }}>
                        {
                            type === "expense" ? `-${amount}`: `+${amount}`
                        }$
                    </p>
                    
                </div>
            })}
        </AllHistoryStyled>
            
        </>
    )
}

const AllHistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;