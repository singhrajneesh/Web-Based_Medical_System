import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PatientDataService } from './../../services/patient-data.service';
import { MessageService } from './../../services/message.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers:[PatientDataService, MessageService]
})
export class NewUserComponent implements OnInit {

  constructor(private patientdataservice : PatientDataService,
      private messageService: MessageService ) { };

  ngOnInit() {
  }

  	emailId:string;
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

  	add(){
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
  		"bloodPressureSimilarity":0,
  		"diabetesSimilarity":0,
  		"bmiSimilarity":0,
  		"wbcSimilarity":0,
  		"rbcSimilarity":0,
  		"pigmentationSimilarity":0,
  		"lipaseSimilarity":0,
  		"electrolyteSimilarity":0,
  		"drugContentSimilarity":0,
  		"potassiumSimilarity":0,
  		"sodiumSimilarity":0,
  		"chlorideSimilarity":0,
  		"calcuimSimilarity":0,
  		"hemaglobinSimilarity":0,
  		"alkalineSimilarity":0,
  		"tempSimilarity":0,
  		"plateletSimilarity":0,
  		"totalSimilarityComplex":0,
        "diet":"",
      "disease":"" };
      //this.getdiet(obj);
  		this.patientdataservice.postPatientDetails(obj).subscribe((res) =>{
        this.messageService.showSaved();
        this.x=1;
        this.diet=res.diet;
        this.disease=res.disease;
  		},(res:Response) =>{})

    }

    getdiet(obj)
    { this.x=1;
      this.patientdataservice.getDiet(obj).subscribe((res) =>{
        this.diet=res.diet;
      },(res:Response) =>{})
    }
  }
