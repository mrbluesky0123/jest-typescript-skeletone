import {test, expect} from '@jest/globals'
import { sum, example } from './main'
import axios from 'axios'

jest.mock('axios')

describe('test with 2 cases: ', () => {
    describe('test case 1: ', () => { 
        it.failing('mocking axios', async () => {
            (axios.get as jest.Mock).mockResolvedValue({count: 123, name: "aaa", age: 12});
            (axios.get as jest.Mock).mockResolvedValue({count: 123, name: "qqq", age: 12});
            // console.log(a)
            const b = await example("qqq")
            console.log(b)
            expect(b).toBe("aaa");
        });
    });
    describe('test case 2: ', () => { 
        it.failing('sum test', () => {
            const b = sum(1, 2)
            console.log(b)
            expect(b).toBe(4);
        });
    });
});