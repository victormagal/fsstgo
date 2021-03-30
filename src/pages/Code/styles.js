import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  containerLeft: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
  },
  containerCode: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24
  },
  baseTitle: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 28,
    color: '#233568',
  },
  innerTitle: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
    color: '#616368',
    marginVertical: 24,
  },
  itemCode: {
    flex: 0.13,
  },
  box: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 34,
    color: '#868E96',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    textAlign: 'center',
  },
  btnSubmit: {
    width: '100%',
    backgroundColor: '#233568',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 16,
    marginVertical: 32,
  },
  submitText: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 18,
    color: '#F8F8F8',
    textTransform: 'uppercase',
  },
  sendCode: {
    fontFamily: 'WorkSans-Light',
    fontSize: 16,
    color: '#868E96',
    textDecorationLine: 'underline',
  },
});
