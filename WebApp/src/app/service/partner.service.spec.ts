import { TestBed, fakeAsync, tick, flushMicrotasks, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Observable, from, of } from 'rxjs';
import { PartnerService } from './partner.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
 
describe('PartnerService', () => {
  let service: PartnerService;
  let httpTestingController: HttpTestingController;
  let injector: TestBed;
  beforeEach(() => {
    TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
      providers: [
        PartnerService
      ]
    });
    injector = getTestBed();
    service = injector.get(PartnerService);
    httpTestingController = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

 
  it('should be initialized', inject([PartnerService], (partnerService: PartnerService) => {
    expect(partnerService).toBeTruthy();
  }));
 
  
  it('#search should  retrieve data',fakeAsync(
    inject(
      [PartnerService, HttpTestingController],
      (partnerService: PartnerService, backend: HttpTestingController) =>{
        let response = null;
        let responseObject  = {"data":[{"id":17,"organization":"Ask Leadership","address":"70 Caspian Cove, Westmoorings, Port of Spain, Trinidad"},{"id":1,"organization":"Balance at Work","address":"Suite 1308, 109 Pitt St \nSydney 2000"},{"id":11,"organization":"Beacon Search","address":"31st floor, Suntec Tower 2, 9 Temasek Boulevard, Singapore 038989"},{"id":4,"organization":"Blue Square 360","address":"Ocean Financial Centre, Level 40, 10 Collyer Quay, Singapore, 049315"},{"id":4,"organization":"Blue Square 360","address":"St Saviours Wharf, London SE1 2BE"},{"id":12,"organization":"C2C Organizational Development","address":"Rich Homes Building, 5/1 Richmond Road, Bangalore, India - 560 025"},{"id":12,"organization":"C2C Organizational Development","address":"1 Raffles Place, #20-61, Tower 2, Singapore 048616"},{"id":14,"organization":"Darren Williams Consulting","address":"Adelaide, Australia"},{"id":13,"organization":"Gallus Consulting","address":"Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG"},{"id":13,"organization":"Gallus Consulting","address":"No1 Royal Exchange, London, EC3V 3DG"},{"id":13,"organization":"Gallus Consulting","address":"3 Hardman Square, Spinningfields, Manchester, M3 3EB"},{"id":6,"organization":"Inspire - Ignite","address":"29 Warren Court, Hampton Hargate, Peterborough, PE7 8HA"},{"id":8,"organization":"LEAD TCM&amp;L","address":"Rivium Oostlaan 35a, 2909 LL Capelle aan den IJssel, The Netherlands"},{"id":10,"organization":"LeaderDevelopment, Inc.","address":"1911 Gadsden Street, Suite 201, Columbia, South Carolina 29201, USA"},{"id":15,"organization":"Lincoln L&amp;D","address":"Unley, SA 5061, Australia"},{"id":5,"organization":"Raiser Resource Group","address":"Jumuia Place, Off Lenana Road, Nairobi, Kenya"},{"id":2,"organization":"Spring Development","address":"Banbury, Oxfordshire"},{"id":3,"organization":"Talent Lab","address":"Emerson 150 - 503, Colonia Chapultepec Morales, DelegaciÃ³n Miguel Hidalgo, MÃ©xico City, Mexico, CP 11570"},{"id":16,"organization":"Targetter","address":"Kleinsachsenheimer Strasse 47, 74321 Bietigheim-Bissingen, Germany"},{"id":7,"organization":"Vanessa GÃ³mez (Freelance consultant)","address":"Condominio Villas de Valencia 93, San Rafael de EscazÃº 10203, San JosÃ©, Costa Rica"},{"id":9,"organization":"Win With People","address":"725 Kenmore Road, Chapel Hill, North Carolina USA"}],"success":true,"message":null};
      partnerService.search({'startlon':'1','startlat':'1','distance':'3000'}).subscribe(value => {
      response=value
       
      });
      const requestWrapper = backend.expectOne({url: 'http://localhost:62237/api/Partner/Search'});
          requestWrapper.flush(responseObject);

          tick();
          expect(requestWrapper.request.method).toEqual('POST');
          expect(response.data.length).toBeGreaterThan(1);
          expect(response.success).toBe(true);
      

  })));

//   it('#search should use Post to retrieve data', () => {
   
//     const testRequest = httpTestingController.expectOne('http://localhost:62237/api/Partner/Search');
 
//     expect(testRequest.request.method).toEqual('POST');
//     testRequest.flush({
//         incomplete_results: false,
//         items: [{}, {}],
//         total_count: 2
//       });
//   });
});