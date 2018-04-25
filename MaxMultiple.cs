int maxMultiple(int divisor, int bound) 
{
  int N = divisor;
  for(;N<=bound;N+=divisor);
  return N-divisor;
}