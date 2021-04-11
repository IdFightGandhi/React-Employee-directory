import React from 'react';

function Table(props) {
    return (

        <div>
            <tr>
                <td>
                    <img src = {props.imageURL} alt="" />
                </td>

                <td> {props.name} </td>
                <td> {props.phone} </td>
                <td> {props.email} </td>
            </tr>
        </div>
    );
}

export default Table;