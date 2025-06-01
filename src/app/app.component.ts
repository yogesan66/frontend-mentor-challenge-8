import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interactive-rating-card';

  submitted: boolean = false;
  selectedRating: string = '0';
  ratingList: any = [
    {
      label: '1',
      selected: false
    },
    {
      label: '2',
      selected: false
    },
    {
      label: '3',
      selected: false
    },
    {
      label: '4',
      selected: false
    },
    {
      label: '5',
      selected: false
    }
  ]

  selectBadge(id: string): void {
    const alreadySelected = this.ratingList.find((res: any) => res.selected === true);
    if (alreadySelected) alreadySelected.selected = false;
    const findBadge = this.ratingList.find((res: any) => res.label === id);
    if (findBadge) findBadge.selected = true;
    this.selectedRating = findBadge.label;
  }

  submit(): void {
    const alreadySelected = this.ratingList.find((res: any) => res.selected === true);
    if (alreadySelected) {
      this.submitted = true;
    } else {
      alert('Kindly select a rating')
    }
  }
}

