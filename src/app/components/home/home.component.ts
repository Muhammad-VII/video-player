import { Component, OnInit, computed, effect, signal } from '@angular/core';

interface UserInterface {
  id: number;
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = signal('')
  titleChangeEffect = effect(() => {
    console.log('title change effect');
  })
  users = signal<UserInterface[]>([])
  usersTotal = computed(() => this.users().length)
  changeTitle(e: Event) {
    const title = (e.target as HTMLInputElement).value
    this.title.set(title)
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.users.set([{id: 1,name: 'foo'}])
      // this.users.update(prevUser => [...prevUser, {id: 1, name: 'foo'}])
      // this.users.mutate(currUsers => currUsers.push({id: 1, name: 'foo'}))

      console.log(this.users());
    }, 2000)
  }
}
