import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChildren, QueryList } from '@angular/core';
import { TreeItem, TreeState, TreeItemConfig } from './tree-item';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css']
})
export class TreeItemComponent implements OnInit {

  @Input()
  data: TreeItem;
  @Input()
  config: TreeItemConfig = {
    showSelect: true,
  };
  @Input()
  showing: boolean;

  @ViewChildren('childrens') components: QueryList<TreeItemComponent>;

  keyPress(event: KeyboardEvent){
    debugger;
   
  }

  state: TreeState = {
    isExpanded: false,
    isSelected: false
  };

  expandItem() {
    this.state.isExpanded = !this.state.isExpanded;
    this.components.forEach(s=>{
      s.showing = this.state.isExpanded;
    })
  }
  constructor() {

  }

  ngOnInit() {
  }
}
