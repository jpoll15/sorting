describe('the bubble sorting algorithm', function(){
  let test_sort_arr = [6,3,2,5,10,4,9,8,0,1,7]
  let test_sorted_arr = [0,1,2,3,4,5,6,7,8,9,10]
  it('can sort an array', function(){
    sorted_arr = bubbleSort(test_sort_arr)

    expect(JSON.stringify(sorted_arr)).toEqual(JSON.stringify(test_sorted_arr))
  })
})
