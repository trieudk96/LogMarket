export interface TreeItem {
    id: number;
    name: string;
    childrens?: TreeItem[];
}

export interface TreeItemConfig{
    showSelect: boolean;
}

export interface TreeState{
    isExpanded: boolean;
    isSelected: boolean;
    
}
