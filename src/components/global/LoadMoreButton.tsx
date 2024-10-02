import React from "react";

interface LoadMoreButtonProps {
    handleLoadMore: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({handleLoadMore}) => {
    return (
        <button onClick={handleLoadMore}>Load more
            <svg viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3L12 14L21 3" stroke="black" stroke-width="3" stroke-linecap="square"
                      stroke-linejoin="round"/>
            </svg>
        </button>
    )
}

export default LoadMoreButton;