import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as fhirLib from 'fhir';

const schema = '{"resourceType":"CodeSystem","id":"KBV-CS-EAU-AU-Type","url":"https://fhir.kbv.de/CodeSystem/KBV_CS_EAU_AU_Type","version":"1.1.0","name":"KBV_CS_EAU_AU_Type","status":"active","date":"2022-09-30","publisher":"Kassenärztliche Bundesvereinigung","contact":[{"telecom":[{"system":"url","value":"http://www.kbv.de"}]}],"description":"Angabe, um welche Art von AU es sich handelt.","copyright":"Kassenärztliche Bundesvereinigung","caseSensitive":true,"content":"complete","concept":[{"code":"ERST","display":"Erstbescheinigung"},{"code":"FOLGE","display":"Folgebescheinigung"},{"code":"ERST_END","display":"Erst- und Endbescheinigung"},{"code":"FOLGE_END","display":"Folge- und Endbescheinigung"}]}'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ng-dummy';

  ngOnInit(): void {

    const KBV_PR_EAU_BUNDLE_SCHEMATA = [
      'KBV_CS_EAU_AU_Type',

    ]

    const parser = new fhirLib.ParseConformance(true, fhirLib.Versions.R4);
    parser.parseBundle(schema)
    const fhir =  new fhirLib.Fhir(parser);
  }
}
