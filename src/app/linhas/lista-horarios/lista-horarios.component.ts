import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-horarios',
  templateUrl: './lista-horarios.component.html',
  styleUrls: ['./lista-horarios.component.css']
})
export class ListaHorariosComponent implements OnInit {

  ItinerariosCTMB = [
    {origem:'CT', destino:'MB', partida:'00:05'},
    {origem:'CT', destino:'MB', partida:'06:10'},
    {origem:'CT', destino:'MB', partida:'08:10'},
    {origem:'CT', destino:'MB', partida:'13:10'},
    {origem:'CT', destino:'MB', partida:'14:10'},
    {origem:'CT', destino:'MB', partida:'15:10'},
    {origem:'CT', destino:'MB', partida:'16:10'},
    {origem:'CT', destino:'MB', partida:'16:40'},
    {origem:'CT', destino:'MB', partida:'17:05'},
    {origem:'CT', destino:'MB', partida:'17:25'},
    {origem:'CT', destino:'MB', partida:'17:35'},
    {origem:'CT', destino:'MB', partida:'17:50'},
    {origem:'CT', destino:'MB', partida:'18:05'},
    {origem:'CT', destino:'MB', partida:'18:15'},
    {origem:'CT', destino:'MB', partida:'18:25'},
    {origem:'CT', destino:'MB', partida:'18:35'},
    {origem:'CT', destino:'MB', partida:'18:45'},
    {origem:'CT', destino:'MB', partida:'19:05'},
    {origem:'CT', destino:'MB', partida:'19:15'},
    {origem:'CT', destino:'MB', partida:'19:25'},
    {origem:'CT', destino:'MB', partida:'19:45'},
    {origem:'CT', destino:'MB', partida:'20:10'},
    {origem:'CT', destino:'MB', partida:'20:30'},
    {origem:'CT', destino:'MB', partida:'21:15'},
    {origem:'CT', destino:'MB', partida:'22:05'},
    {origem:'CT', destino:'MB', partida:'22:55'}
  ]

  ItinerariosMBCT = [
    {origem:'MB', destino:'CT', partida:'05:30'},
    {origem:'MB', destino:'CT', partida:'05:45'},
    {origem:'MB', destino:'CT', partida:'06:35'},
    {origem:'MB', destino:'CT', partida:'06:50'},
    {origem:'MB', destino:'CT', partida:'07:15'},
    {origem:'MB', destino:'CT', partida:'07:30'},
    {origem:'MB', destino:'CT', partida:'07:40'},
    {origem:'MB', destino:'CT', partida:'07:50'},
    {origem:'MB', destino:'CT', partida:'08:00'},
    {origem:'MB', destino:'CT', partida:'08:10'},
    {origem:'MB', destino:'CT', partida:'08:20'},
    {origem:'MB', destino:'CT', partida:'08:30'},
    {origem:'MB', destino:'CT', partida:'08:40'},
    {origem:'MB', destino:'CT', partida:'08:50'},
    {origem:'MB', destino:'CT', partida:'09:00'},
    {origem:'MB', destino:'CT', partida:'09:10'},
    {origem:'MB', destino:'CT', partida:'09:20'},
    {origem:'MB', destino:'CT', partida:'09:45'},
    {origem:'MB', destino:'CT', partida:'10:45'},
    {origem:'MB', destino:'CT', partida:'11:25'},
    {origem:'MB', destino:'CT', partida:'11:45'},
    {origem:'MB', destino:'CT', partida:'12:20'},
    {origem:'MB', destino:'CT', partida:'12:40'},
    {origem:'MB', destino:'CT', partida:'12:50'},
    {origem:'MB', destino:'CT', partida:'13:30'},
    {origem:'MB', destino:'CT', partida:'15:40'},
    {origem:'MB', destino:'CT', partida:'17:30'},
    {origem:'MB', destino:'CT', partida:'17:50'},
    {origem:'MB', destino:'CT', partida:'18:20'},
    {origem:'MB', destino:'CT', partida:'18:40'},
    {origem:'MB', destino:'CT', partida:'21:45'},
    {origem:'MB', destino:'CT', partida:'23:50'}
  ]



 
  constructor() { }

  ngOnInit() {
  }

}
