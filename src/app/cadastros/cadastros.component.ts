import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CadastrosService } from '../services/cadastros.service';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss']
})
export class CadastrosComponent implements OnInit {
  page: { id: number; name: string; };

  constructor(private router: ActivatedRoute, private cadastrosService: CadastrosService) { }

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.page = this.cadastrosService.getCadastroInfo(res.id)
    })
  }

}
