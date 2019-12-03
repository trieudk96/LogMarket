import { TreeItem } from './../tree-item/tree-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})
export class TreeListComponent implements OnInit {

  nodes: TreeItem[];
  constructor() { }

  ngOnInit() {
  }

}
