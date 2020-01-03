import React, {useEffect} from 'react';
import { InnerContainer } from './styled-components';
import {Cell, Table, Column } from '@blueprintjs/table';
import {fetchCharacterGroupOne} from '../actions/groupOne';
import { connect } from 'react-redux';
 
const TableCompBase = ({groupOne, fetchCharacterGroupOne}) => {

    useEffect(() => {
        if (groupOne.length === 0) {
            fetchCharacterGroupOne();
        }
    })

    const cellRenderer = (groupOne) => {
        groupOne.map((item, i) => {
            return <Cell>{item.name}</Cell>
        })
    }

    return(
        <InnerContainer>
            <Table numRows={groupOne.length}>
              <Column name="characters" cellRenderer={cellRenderer(groupOne)}/>
            </Table>
        </InnerContainer>
    )
}

const mapStateToProps = state => ({
    groupOne: state.characterGroupOne.getGroupOneCharacters,
  });

const TableComp = connect(
    mapStateToProps,
    {fetchCharacterGroupOne}
)(TableCompBase);

export default TableComp;