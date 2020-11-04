import React, { memo } from "react";
import { useDispatch } from "react-redux";
import SortableTree from "react-sortable-tree";
import FileExplorerTheme from "react-sortable-tree-theme-minimal";
import styled from "styled-components";
import { switchEvent } from "actions/eventsActions";

const AccordionSidebar = ({ events = [] }) => {
  const dispatch = useDispatch();
  const handleEventSwitch = (events) => {
    dispatch(switchEvent({ events }));
  };
  return (
    <StyledTreeWrapper>
      <SortableTree
        treeData={events}
        onChange={(treeData) => handleEventSwitch(treeData)}
        theme={FileExplorerTheme}
        generateNodeProps={(rowInfo) => {
          console.log("row", rowInfo);
          return {
            style: {
              // paddingLeft: 25,
            },
            title: (
              <div
                className={`rowInfo ${
                  !rowInfo.node.children && "rowInfo-last-child"
                }`}
              >
                {rowInfo.node.title}
              </div>
            ),
          };
        }}
      />
    </StyledTreeWrapper>
  );
};

const StyledTreeWrapper = styled.div`
  width: 30%;
  height: calc(100vh - 64px);
  .rstcustom__rowContents {
    box-shadow: none;
  }
  .rstcustom__node {
    border-bottom: 1px solid #e9eaeb;
  }
  .rowInfo {
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #797b7d;
    font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  }
  .rowInfo-last-child {
    &:before {
      content: "•";
      color: #adaeaf;
      margin-right: 10px;
      font-size: 10px;
    }
  }
  .ReactVirtualized__Grid {
    &:focus {
      outline: none;
    }
  }
`;

export default memo(AccordionSidebar);
