import { Component, OnInit, Input } from '@angular/core';
import { TreeItem } from 'src/tree-item/tree-item';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  @Input()
  nodes: TreeItem[];
  constructor() { }

  ngOnInit() {
  }

}
