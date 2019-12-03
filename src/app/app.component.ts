import { Component } from '@angular/core';
import { TreeItem } from '../tree-item/tree-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nodes: TreeItem[] = [
    {
      id: 1,
      name: 'root1',
      childrens: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      childrens: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          childrens: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = {};
}
