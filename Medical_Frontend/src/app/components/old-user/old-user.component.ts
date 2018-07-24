import { Component, OnInit } from '@angular/core';
import { PatientDataService } from './../../services/patient-data.service';

@Component({
  selector: 'app-old-user',
  templateUrl: './old-user.component.html',
  styleUrls: ['./old-user.component.css'],
  providers:[PatientDataService]
})
export class OldUserComponent implements OnInit {
  data:any;
  name:string;
  emailId:string;
  emailAddress:string;
  getTemp:number;

  bloodPressure:number;
  diabetes: number;
  bmi: number;
  wbc: number;
  rbc: number;
  pigmentation: number;
  lipase: number;
  electrolyte: number;
  drugContent: number;
  potassium: number;
  sodium: number;
  chloride: number;
  calcuim: number;
  hemaglobin: number;
  alkaline: number;
  temp: number;
  platelet: number;


  bloodPressureWeight: number;
  diabetesWeight: number;
  bmiWeight: number;
  wbcWeight: number;
  rbcWeight: number;
  pigmentationWeight: number;
  lipaseWeight: number;
  electrolyteWeight: number;
  drugContentWeight: number;
  potassiumWeight: number;
  sodiumWeight: number;
  chlorideWeight: number;
  calcuimWeight: number;
  hemaglobinWeight: number;
  alkalineWeight: number;
  tempWeight: number;
  plateletWeight: number;

  bloodPressureSimilarity: number;
  diabetesSimilarity: number;
  bmiSimilarity: number;
  wbcSimilarity: number;
  rbcSimilarity: number;
  pigmentationSimilarity: number;
  lipaseSimilarity: number;
  electrolyteSimilarity: number;
  drugContentSimilarity: number;
  potassiumSimilarity: number;
  sodiumSimilarity: number;
  chlorideSimilarity: number;
  calcuimSimilarity: number;
  hemaglobinSimilarity: number;
  alkalineSimilarity: number;
  tempSimilarity: number;
  plateletSimilarity: number;
  diet:string;
  disease:string;
  totalSimilarityComplex: number;

  constructor(private patientdataservice : PatientDataService) { }

  ngOnInit() {
  }
  get(){
    this.patientdataservice.getPatientDetails(this.emailAddress).subscribe((res) =>{
      this.data=res;
      this.name=this.data.emailId;
      this.bloodPressure=this.data.bloodPressure;
      this.diabetes=this.data.diabetes;
      this.bmi=this.data.bmi;
      this.wbc=this.data.wbc;
      this.rbc=this.data.wbc;
      this.pigmentation=this.data.pigmentation;
      this.lipase=this.data.pigmentation;
      this.electrolyte=this.data.electrolyte;
      this.drugContent=this.data.drugContent;
      this.potassium=this.data.potassium;
      this.sodium=this.data.sodium;
      this.chloride=this.data.chloride;
      this.calcuim=this.data.calcuim;
      this.hemaglobin=this.data.hemaglobin;
      this.alkaline=this.data.alkaline;
      this.temp=this.data.temp;
      this.platelet=this.data.platelet;
      this.bloodPressureWeight=this.data.bloodPressureWeight;
      this.diabetesWeight=this.data.diabetesWeight;
      this.bmiWeight=this.data.bmiWeight;
      this.wbcWeight=this.data.wbcWeight;
      this.rbcWeight=this.data.rbcWeight;
      this.pigmentationWeight=this.data.pigmentationWeight;
      this.lipaseWeight=this.data.lipaseWeight;
      this.electrolyteWeight=this.data.electrolyteWeight;
      this.drugContentWeight=this.data.drugContentWeight;
      this.potassiumWeight=this.data.potassiumWeight;
      this.sodiumWeight=this.data.sodiumWeight;
      this.chlorideWeight=this.data.chlorideWeight;
      this.calcuimWeight=this.data.calcuimWeight;
      this.hemaglobinWeight=this.data.hemaglobinWeight;
      this.alkalineWeight=this.data.alkalineWeight;
      this.tempWeight=this.data.tempWeight;
      this.plateletWeight=this.data.plateletWeight;
      this.diet=this.data.diet;
      this.disease=this.data.disease;
    }, (error) =>{
    })
    }



}
