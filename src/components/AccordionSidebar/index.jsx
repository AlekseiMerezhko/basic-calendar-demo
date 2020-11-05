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
      <SortableTreeHeader>Name</SortableTreeHeader>
      <SortableTree
        treeData={events}
        onChange={(treeData) => handleEventSwitch(treeData)}
        theme={FileExplorerTheme}
        isVirtualized={false}
        scaffoldBlockPxWidth={28}
        generateNodeProps={(rowInfo) => {
          return {
            title: (
              <div
                className={`rowInfo ${
                  !rowInfo?.node?.children || !rowInfo?.node?.children.length
                    ? "rowInfo-last-child"
                    : "rowInfo-parent"
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

const SortableTreeHeader = styled.div`
  padding: 15px 7px;
  background: #f3f4f5;
  color: #667280;
`;

const StyledTreeWrapper = styled.div`
  width: 30%;
  height: calc(100vh - 64px);
  .rstcustom__rowContents {
    box-shadow: none;
    background-color: transparent;
  }

  .rstcustom__collapseButton {
    transform: translate(-68%, -135%);
    font-size: 28px;
    &:before {
      content: "⌄";
      color: #adaeaf;
      position: initial;
    }
  }
  .rstcustom__expandButton {
    transform: translate(-73%, -110%);
    font-size: 28px;
    &:before {
      content: "⌄";
      color: #adaeaf;
      display: inline-block;
      transform: rotate(-90deg);
      position: initial;
    }
  }
  .rstcustom__highlight {
    background-color: rgba(254, 172, 49, 0.15);
  }
  .rstcustom__node {
    border-bottom: 1px solid #e9eaeb;
    height: 45px !important;
    position: relative !important;
    top: unset !important;
  }
  .rowInfo {
    display: flex;
    align-items: center;
    font-weight: 400;
    color: #797b7d;
    font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  }
  .rowInfo-last-child {
    position: relative;
    &:before {
      content: "•";
      color: #adaeaf;
      margin-right: 10px;
      font-size: 10px;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      left: -14px;
    }
  }
  .rowInfo-parent {
    font-weight: 600;
  }
  .ReactVirtualized__Grid {
    &:focus {
      outline: none;
    }
  }
`;

export default memo(AccordionSidebar);
