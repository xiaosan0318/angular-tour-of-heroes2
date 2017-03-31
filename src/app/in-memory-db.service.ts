import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

/**
* This class provides the NameList service with methods to read names and add names.
*/
@Injectable()
export class InMemoryDataService implements InMemoryDbService {
        createDb(): Object {
            let heroes : Hero[] = [
                {id: 11, name: "hehe"},
                {id: 12, name: "yezhengmao"},
                {id: 13, name: "chengchunhui"},
                {id: 14, name: "zhuyunxing"},
                {id: 15, name: "zhouxuan"},
                {id: 16, name: "miaojujie"},
                {id: 17, name: "xiaosan"},
                {id: 18, name: "lijiangfeng"},
                {id: 19, name: "fangjunxiao"},
                {id: 11, name: "zhengchan"}
            ];
            return {heroes};
        }
}