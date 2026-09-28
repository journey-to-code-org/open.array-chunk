import test from "node:test";
import assert from "node:assert/strict";
import { chunkArray } from "../src/index.js";
test("chunks arrays",()=>assert.deepEqual(chunkArray([1,2,3,4,5],2),[[1,2],[3,4],[5]]));
test("does not mutate input",()=>{const a=[1,2];chunkArray(a,1);assert.deepEqual(a,[1,2]);});
test("rejects invalid sizes",()=>assert.throws(()=>chunkArray([],0),RangeError));
