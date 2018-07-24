import { Component, OnInit } from '@angular/core';
import { PatientDataService } from './../../services/patient-data.service';
import { MessageService } from './../../services/message.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers:[PatientDataService,MessageService]
})
export class UserdetailsComponent implements OnInit {

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

  totalSimilarityComplex: number;
  x:number=0;
  diet:string;
  disease:string;

  constructor(private patientdataservice : PatientDataService,
    private messageService: MessageService) { }

  ngOnInit() {
  }

  get(){
    (<HTMLInputElement>document.getElementById("bloodPressure")).disabled= true;
    (<HTMLInputElement>document.getElementById("diabetes")).disabled= true;
    (<HTMLInputElement>document.getElementById("bmi")).disabled= true;
    (<HTMLInputElement>document.getElementById("wbc")).disabled= true;
    (<HTMLInputElement>document.getElementById("rbc")).disabled= true;
    (<HTMLInputElement>document.getElementById("pigmentation")).disabled= true;
    (<HTMLInputElement>document.getElementById("lipase")).disabled= true;
    (<HTMLInputElement>document.getElementById("electrolyte")).disabled= true;
    (<HTMLInputElement>document.getElementById("drugContent")).disabled= true;
    (<HTMLInputElement>document.getElementById("potassium")).disabled= true;
    (<HTMLInputElement>document.getElementById("sodium")).disabled= true;
    (<HTMLInputElement>document.getElementById("chloride")).disabled= true;
    (<HTMLInputElement>document.getElementById("calcuim")).disabled= true;
    (<HTMLInputElement>document.getElementById("hemaglobin")).disabled= true;
    (<HTMLInputElement>document.getElementById("alkaline")).disabled= true;
    (<HTMLInputElement>document.getElementById("temp")).disabled= true;
    (<HTMLInputElement>document.getElementById("platelet")).disabled= true;
    (<HTMLInputElement>document.getElementById("bloodPressureWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("diabetesWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("bmiWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("wbcWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("rbcWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("pigmentationWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("lipaseWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("electrolyteWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("drugContentWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("potassiumWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("sodiumWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("chlorideWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("calcuimWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("hemaglobinWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("alkalineWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("tempWeight")).disabled= true;
    (<HTMLInputElement>document.getElementById("plateletWeight")).disabled= true;
    this.patientdataservice.getPatientDetails(this.emailId).subscribe((res) =>{
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

    undisable(){
      (<HTMLInputElement>document.getElementById("bloodPressure")).disabled= false;
      (<HTMLInputElement>document.getElementById("diabetes")).disabled= false;
      (<HTMLInputElement>document.getElementById("bmi")).disabled= false;
      (<HTMLInputElement>document.getElementById("wbc")).disabled= false;
      (<HTMLInputElement>document.getElementById("rbc")).disabled= false;
      (<HTMLInputElement>document.getElementById("pigmentation")).disabled= false;
      (<HTMLInputElement>document.getElementById("lipase")).disabled= false;
      (<HTMLInputElement>document.getElementById("electrolyte")).disabled= false;
      (<HTMLInputElement>document.getElementById("drugContent")).disabled= false;
      (<HTMLInputElement>document.getElementById("potassium")).disabled= false;
      (<HTMLInputElement>document.getElementById("sodium")).disabled= false;
      (<HTMLInputElement>document.getElementById("chloride")).disabled= false;
      (<HTMLInputElement>document.getElementById("calcuim")).disabled= false;
      (<HTMLInputElement>document.getElementById("hemaglobin")).disabled= false;
      (<HTMLInputElement>document.getElementById("alkaline")).disabled= false;
      (<HTMLInputElement>document.getElementById("temp")).disabled= false;
      (<HTMLInputElement>document.getElementById("platelet")).disabled= false;
      (<HTMLInputElement>document.getElementById("bloodPressureWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("diabetesWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("bmiWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("wbcWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("rbcWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("pigmentationWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("lipaseWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("electrolyteWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("drugContentWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("potassiumWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("sodiumWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("chlorideWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("calcuimWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("hemaglobinWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("alkalineWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("tempWeight")).disabled= false;
      (<HTMLInputElement>document.getElementById("plateletWeight")).disabled= false;
    }

    put(){
      (<HTMLInputElement>document.getElementById("bloodPressure")).disabled= true;
      (<HTMLInputElement>document.getElementById("diabetes")).disabled= true;
      (<HTMLInputElement>document.getElementById("bmi")).disabled= true;
      (<HTMLInputElement>document.getElementById("wbc")).disabled= true;
      (<HTMLInputElement>document.getElementById("rbc")).disabled= true;
      (<HTMLInputElement>document.getElementById("pigmentation")).disabled= true;
      (<HTMLInputElement>document.getElementById("lipase")).disabled= true;
      (<HTMLInputElement>document.getElementById("electrolyte")).disabled= true;
      (<HTMLInputElement>document.getElementById("drugContent")).disabled= true;
      (<HTMLInputElement>document.getElementById("potassium")).disabled= true;
      (<HTMLInputElement>document.getElementById("sodium")).disabled= true;
      (<HTMLInputElement>document.getElementById("chloride")).disabled= true;
      (<HTMLInputElement>document.getElementById("calcuim")).disabled= true;
      (<HTMLInputElement>document.getElementById("hemaglobin")).disabled= true;
      (<HTMLInputElement>document.getElementById("alkaline")).disabled= true;
      (<HTMLInputElement>document.getElementById("temp")).disabled= true;
      (<HTMLInputElement>document.getElementById("platelet")).disabled= true;
      (<HTMLInputElement>document.getElementById("bloodPressureWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("diabetesWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("bmiWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("wbcWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("rbcWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("pigmentationWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("lipaseWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("electrolyteWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("drugContentWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("potassiumWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("sodiumWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("chlorideWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("calcuimWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("hemaglobinWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("alkalineWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("tempWeight")).disabled= true;
      (<HTMLInputElement>document.getElementById("plateletWeight")).disabled= true;
      let obj= {
      "emailId":this.emailId,
      "bloodPressure":this.bloodPressure,
      "diabetes":this.diabetes,
      "bmi":this.bmi,
      "wbc":this.wbc,
      "rbc":this.rbc,
      "pigmentation":this.pigmentation,
      "lipase":this.lipase,
      "electrolyte":this.electrolyte,
      "drugContent":this.drugContent,
      "potassium":this.potassium,
      "sodium":this.potassium,
      "chloride":this.chloride,
      "calcuim":this.calcuim,
      "hemaglobin":this.hemaglobin,
      "alkaline":this.alkaline,
      "temp":this.temp,
      "platelet":this.platelet,
      "bloodPressureWeight":this.bloodPressureWeight,
      "diabetesWeight":this.diabetesWeight,
      "bmiWeight":this.bmiWeight,
      "wbcWeight":this.wbcWeight,
      "rbcWeight":this.rbcWeight,
      "pigmentationWeight":this.pigmentationWeight,
      "lipaseWeight":this.lipaseWeight,
      "electrolyteWeight":this.electrolyteWeight,
      "drugContentWeight":this.drugContentWeight,
      "potassiumWeight":this.potassiumWeight,
      "sodiumWeight":this.sodiumWeight,
      "chlorideWeight":this.chlorideWeight,
      "calcuimWeight":this.calcuimWeight,
      "hemaglobinWeight":this.hemaglobinWeight,
      "alkalineWeight":this.alkalineWeight,
      "tempWeight":this.tempWeight,
      "plateletWeight":this.plateletWeight,
      "bloodPressureSimilarity":this.bloodPressureSimilarity,
      "diabetesSimilarity":this.diabetesSimilarity,
      "bmiSimilarity":this.bmiSimilarity,
      "wbcSimilarity":this.wbcSimilarity,
      "rbcSimilarity":this.rbcSimilarity,
      "pigmentationSimilarity":this.pigmentationSimilarity,
      "lipaseSimilarity":this.lipaseSimilarity,
      "electrolyteSimilarity":this.electrolyteSimilarity,
      "drugContentSimilarity":this.drugContentSimilarity,
      "potassiumSimilarity":this.potassiumSimilarity,
      "sodiumSimilarity":this.sodiumSimilarity,
      "chlorideSimilarity":this.chlorideSimilarity,
      "calcuimSimilarity":this.calcuimSimilarity,
      "hemaglobinSimilarity":this.hemaglobinSimilarity,
      "alkalineSimilarity":this.alkalineSimilarity,
      "tempSimilarity":this.tempSimilarity,
      "plateletSimilarity":this.plateletSimilarity,
      "totalSimilarityComplex":this.totalSimilarityComplex,
      "diet":this.diet,
      "disease":this.disease};
      this.patientdataservice.putPatientDetails(obj).subscribe((res) =>{
        this.messageService.showUpdated();
        this.get();
        this.x=1;
      },(res:Response) =>{})
    }
    }
